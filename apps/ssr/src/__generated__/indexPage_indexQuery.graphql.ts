/**
 * @generated SignedSource<<b32db714ffcbbc01ca8b921a3ab544b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
export type indexPage_indexQuery$variables = {}
export type indexPage_indexQuery$data = {
  readonly user: string | null
}
export type indexPage_indexQuery = {
  response: indexPage_indexQuery$data
  variables: indexPage_indexQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'user',
      storageKey: null,
    },
  ]
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'indexPage_indexQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'indexPage_indexQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: 'a22899dea32c658b6b989b0493736b9a',
      id: null,
      metadata: {},
      name: 'indexPage_indexQuery',
      operationKind: 'query',
      text: 'query indexPage_indexQuery {\n  user\n}\n',
    },
  }
})()

;(node as any).hash = '63312f78b8f17767e5b58f0c982913fb'

export default node
