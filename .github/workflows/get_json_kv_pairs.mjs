
import { readFile } from 'fs/promises'

const jsonString = (await readFile('./project.json')).toString()

const json = JSON.parse(jsonString)

for (let key in json) {
    console.log(`${key.toUpperCase()}=${json[key]}`)
}