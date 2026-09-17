
import { readFile } from 'fs/promises'
import core from '@actions/core'

const jsonString = (await readFile('./project.json')).toString()

const json = JSON.parse(jsonString)

for (let entry in json) {
    core.exportVariable(entry, json[entry])
}