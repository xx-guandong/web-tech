#!/usr/bin/env ts-node
import fs from 'fs'
import path from 'path'
import { schema } from '../server/graphql/schema.ts'
import { printSchema } from 'graphql'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const schemaPath = path.resolve(__dirname, '../schema.graphql')

fs.writeFileSync(schemaPath, printSchema(schema))

console.log('Wrote ' + schemaPath)
