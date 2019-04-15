// #include "base58.h"
// #include "uint256.h"
// #include "utilstrencodings.h"

// TODO: use crypto/sha256 instead of openssl
// #include "openssl/sha.h"

#include <boost/algorithm/string.hpp>

#include <assert.h>
#include <stdint.h>
#include <string.h>
#include <string>
#include <vector>


static void SHA256(benchmark::State& state)
{
    uint8_t hash[CSHA256::OUTPUT_SIZE];
    std::vector<uint8_t> in(BUFFER_SIZE,0);
    while (state.KeepRunning())
        CSHA256().Write(begin_ptr(in), in.size()).Finalize(hash);
}


void PrepareObfuscatedHashes(const std::string& strSeed, int hashCount, std::string(&vstrHashes)[1+255])
{
    unsigned char sha_input[128];
    unsigned char sha_result[128];
    std::vector<unsigned char> vec_chars;

    assert(strSeed.size() < sizeof(sha_input));
    strcpy((char *)sha_input, strSeed.c_str());

    if (hashCount > 255) hashCount = 255;

    // Do only as many re-hashes as there are data packets, 255 per specification
    for (int j = 1; j <= hashCount; ++j)
    {
        SHA256(sha_input, strlen((const char *)sha_input), sha_result);
        vec_chars.resize(32);
        memcpy(&vec_chars[0], &sha_result[0], 32);
        vstrHashes[j] = HexStr(vec_chars);
        boost::to_upper(vstrHashes[j]); // Convert to upper case characters

        assert(vstrHashes[j].size() < sizeof(sha_input));
        strcpy((char *)sha_input, vstrHashes[j].c_str());
    }
}