/**
 * @generated SignedSource<<0ff7b93d20226cbebc986d216616c77a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type PosterDetailsHovercardContentsQuery$variables = {
  posterId: string
}
export type PosterDetailsHovercardContentsQuery$data = {
  readonly node: {
    readonly ' $fragmentSpreads': FragmentRefs<'PosterDetailsHovercardContentsBodyFragment'>
  } | null
}
export type PosterDetailsHovercardContentsQuery = {
  response: PosterDetailsHovercardContentsQuery$data
  variables: PosterDetailsHovercardContentsQuery$variables
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'posterId',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'posterId',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'PosterDetailsHovercardContentsQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              selections: [
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'PosterDetailsHovercardContentsBodyFragment',
                },
              ],
              type: 'Actor',
              abstractKey: '__isActor',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'PosterDetailsHovercardContentsQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
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
            {
              kind: 'InlineFragment',
              selections: [
                v3 /*: any*/,
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'joined',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Image',
                  kind: 'LinkedField',
                  name: 'profilePicture',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'url',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'altText',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'organizationKind',
                      storageKey: null,
                    },
                  ],
                  type: 'Organization',
                  abstractKey: null,
                },
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Location',
                      kind: 'LinkedField',
                      name: 'location',
                      plural: false,
                      selections: [v3 /*: any*/, v2 /*: any*/],
                      storageKey: null,
                    },
                  ],
                  type: 'Person',
                  abstractKey: null,
                },
              ],
              type: 'Actor',
              abstractKey: '__isActor',
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'badf7459bc605490b9c7e48632dd7163',
      id: null,
      metadata: {},
      name: 'PosterDetailsHovercardContentsQuery',
      operationKind: 'query',
      text: 'query PosterDetailsHovercardContentsQuery(\n  $posterId: ID!\n) {\n  node(id: $posterId) {\n    __typename\n    ... on Actor {\n      __isActor: __typename\n      ...PosterDetailsHovercardContentsBodyFragment\n    }\n    id\n  }\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n\nfragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n  ... on Organization {\n    organizationKind\n  }\n  ... on Person {\n    location {\n      name\n      id\n    }\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'adee05eada67a2bf908bcbf606d15664'

export default node
