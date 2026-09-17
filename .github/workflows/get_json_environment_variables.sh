#!/bin/bash

function export() {
    echo "$1" >> $GITHUB_ENV
}

node ./.github/workflows/get_json_kv_pairs.mjs | while read line
do
    export $line
done

