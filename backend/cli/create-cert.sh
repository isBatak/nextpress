#!/bin/bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;93m'
NC='\033[0m'

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout nextpress.local.key \
    -new \
    -out nextpress.local.crt \
    -subj /CN=nextpress.local \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:nextpress.local')) \
    -sha256 \
    -days 3650

mkdir -p ../certs

mv *.crt ../certs/
mv *.key ../certs/

echo  -e ${GREEN}"Cert created in /cert! ${NC}";
