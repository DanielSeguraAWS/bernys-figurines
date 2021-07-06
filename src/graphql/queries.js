/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFigurine = /* GraphQL */ `
  query GetFigurine($id: ID!) {
    getFigurine(id: $id) {
      id
      name
      description
      submittedBy
      submittedOn
      createdAt
      updatedAt
    }
  }
`;
export const listFigurines = /* GraphQL */ `
  query ListFigurines(
    $filter: ModelFigurineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFigurines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        submittedBy
        submittedOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
