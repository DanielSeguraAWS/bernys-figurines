/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFigurine = /* GraphQL */ `
  mutation CreateFigurine(
    $input: CreateFigurineInput!
    $condition: ModelFigurineConditionInput
  ) {
    createFigurine(input: $input, condition: $condition) {
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
export const updateFigurine = /* GraphQL */ `
  mutation UpdateFigurine(
    $input: UpdateFigurineInput!
    $condition: ModelFigurineConditionInput
  ) {
    updateFigurine(input: $input, condition: $condition) {
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
export const deleteFigurine = /* GraphQL */ `
  mutation DeleteFigurine(
    $input: DeleteFigurineInput!
    $condition: ModelFigurineConditionInput
  ) {
    deleteFigurine(input: $input, condition: $condition) {
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
