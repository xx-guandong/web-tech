/**
 * @generated SignedSource<<ccb44ff864f6e18b6eb913696bf5da9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
export type newsfeedQuery$variables = {}
export type newsfeedQuery$data = {
  readonly topStory: {
    readonly poster: {
      readonly name: string | null
      readonly profilePicture: {
        readonly url: string
      } | null
    }
    readonly summary: string | null
    readonly thumbnail: {
      readonly url: string
    } | null
    readonly title: string
  } | null
}
export type newsfeedQuery = {
  response: newsfeedQuery$data
  variables: newsfeedQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'title',
      storageKey: null,
    },
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'summary',
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v3 = [
      {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'url',
        storageKey: null,
      },
    ],
    v4 = {
      alias: null,
      args: null,
      concreteType: 'Image',
      kind: 'LinkedField',
      name: 'profilePicture',
      plural: false,
      selections: v3 /*: any*/,
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      concreteType: 'Image',
      kind: 'LinkedField',
      name: 'thumbnail',
      plural: false,
      selections: v3 /*: any*/,
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'newsfeedQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Story',
          kind: 'LinkedField',
          name: 'topStory',
          plural: false,
          selections: [
            v0 /*: any*/,
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'poster',
              plural: false,
              selections: [v2 /*: any*/, v4 /*: any*/],
              storageKey: null,
            },
            v5 /*: any*/,
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'newsfeedQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Story',
          kind: 'LinkedField',
          name: 'topStory',
          plural: false,
          selections: [
            v0 /*: any*/,
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'poster',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                v2 /*: any*/,
                v4 /*: any*/,
                v6 /*: any*/,
              ],
              storageKey: null,
            },
            v5 /*: any*/,
            v6 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '1484e19d5cdef679ed2b70abb3033e1b',
      id: null,
      metadata: {},
      name: 'newsfeedQuery',
      operationKind: 'query',
      text: 'query newsfeedQuery {\n  topStory {\n    title\n    summary\n    poster {\n      __typename\n      name\n      profilePicture {\n        url\n      }\n      id\n    }\n    thumbnail {\n      url\n    }\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'accf5abbaccd1811cdd66242c44f58ca'

export default node
