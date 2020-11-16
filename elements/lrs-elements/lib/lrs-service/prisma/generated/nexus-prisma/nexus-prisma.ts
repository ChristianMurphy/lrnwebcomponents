/**
 * This file was automatically generated by nexus-prisma@0.3.5
 * Do not make changes to this file directly
 */

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Statement: StatementObject
      StatementConnection: StatementConnectionObject
      PageInfo: PageInfoObject
      StatementEdge: StatementEdgeObject
      AggregateStatement: AggregateStatementObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      StatementSubscriptionPayload: StatementSubscriptionPayloadObject
      StatementPreviousValues: StatementPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Statement: StatementFieldDetails
      StatementConnection: StatementConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      StatementEdge: StatementEdgeFieldDetails
      AggregateStatement: AggregateStatementFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      StatementSubscriptionPayload: StatementSubscriptionPayloadFieldDetails
      StatementPreviousValues: StatementPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      StatementWhereUniqueInput: StatementWhereUniqueInputInputObject
      StatementWhereInput: StatementWhereInputInputObject
      StatementCreateInput: StatementCreateInputInputObject
      StatementUpdateInput: StatementUpdateInputInputObject
      StatementUpdateManyMutationInput: StatementUpdateManyMutationInputInputObject
      StatementSubscriptionWhereInput: StatementSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    StatementOrderByInput: StatementOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'statement', args?: QueryStatementArgs[] | false, alias?: string  } 
  | { name: 'statements', args?: QueryStatementsArgs[] | false, alias?: string  } 
  | { name: 'statementsConnection', args?: QueryStatementsConnectionArgs[] | false, alias?: string  } 

type QueryFields =
  | 'statement'
  | 'statements'
  | 'statementsConnection'


type QueryStatementArgs =
  | 'where'
type QueryStatementsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryStatementsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface QueryFieldDetails {
  statement: {
    type: 'Statement'
    args: Record<QueryStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: StatementWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement | null> | prisma.Statement | null
  }
  statements: {
    type: 'Statement'
    args: Record<QueryStatementsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StatementWhereInput | null, orderBy?: prisma.StatementOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement[]> | prisma.Statement[]
  }
  statementsConnection: {
    type: 'StatementConnection'
    args: Record<QueryStatementsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StatementWhereInput | null, orderBy?: prisma.StatementOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StatementConnection> | prisma.StatementConnection
  }
}
  

// Types for Statement

type StatementObject =
  | StatementFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'data', args?: [] | false, alias?: string  } 

type StatementFields =
  | 'id'
  | 'data'



  

export interface StatementFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  data: {
    type: 'Json'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for StatementConnection

type StatementConnectionObject =
  | StatementConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type StatementConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface StatementConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StatementConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'StatementEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"StatementConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StatementEdge[]> | prisma.StatementEdge[]
  }
  aggregate: {
    type: 'AggregateStatement'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StatementConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateStatement> | prisma.AggregateStatement
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for StatementEdge

type StatementEdgeObject =
  | StatementEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type StatementEdgeFields =
  | 'node'
  | 'cursor'



  

export interface StatementEdgeFieldDetails {
  node: {
    type: 'Statement'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StatementEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement> | prisma.Statement
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateStatement

type AggregateStatementObject =
  | AggregateStatementFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateStatementFields =
  | 'count'



  

export interface AggregateStatementFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createStatement', args?: MutationCreateStatementArgs[] | false, alias?: string  } 
  | { name: 'updateStatement', args?: MutationUpdateStatementArgs[] | false, alias?: string  } 
  | { name: 'updateManyStatements', args?: MutationUpdateManyStatementsArgs[] | false, alias?: string  } 
  | { name: 'upsertStatement', args?: MutationUpsertStatementArgs[] | false, alias?: string  } 
  | { name: 'deleteStatement', args?: MutationDeleteStatementArgs[] | false, alias?: string  } 
  | { name: 'deleteManyStatements', args?: MutationDeleteManyStatementsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createStatement'
  | 'updateStatement'
  | 'updateManyStatements'
  | 'upsertStatement'
  | 'deleteStatement'
  | 'deleteManyStatements'


type MutationCreateStatementArgs =
  | 'data'
type MutationUpdateStatementArgs =
  | 'data'
  | 'where'
type MutationUpdateManyStatementsArgs =
  | 'data'
  | 'where'
type MutationUpsertStatementArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteStatementArgs =
  | 'where'
type MutationDeleteManyStatementsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createStatement: {
    type: 'Statement'
    args: Record<MutationCreateStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StatementCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement> | prisma.Statement
  }
  updateStatement: {
    type: 'Statement'
    args: Record<MutationUpdateStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StatementUpdateInput, where: StatementWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement | null> | prisma.Statement | null
  }
  updateManyStatements: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyStatementsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StatementUpdateManyMutationInput, where?: StatementWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertStatement: {
    type: 'Statement'
    args: Record<MutationUpsertStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StatementWhereUniqueInput, create: StatementCreateInput, update: StatementUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement> | prisma.Statement
  }
  deleteStatement: {
    type: 'Statement'
    args: Record<MutationDeleteStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StatementWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement | null> | prisma.Statement | null
  }
  deleteManyStatements: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyStatementsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: StatementWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'statement', args?: SubscriptionStatementArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'statement'


type SubscriptionStatementArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  statement: {
    type: 'StatementSubscriptionPayload'
    args: Record<SubscriptionStatementArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: StatementSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StatementSubscriptionPayload | null> | prisma.StatementSubscriptionPayload | null
  }
}
  

// Types for StatementSubscriptionPayload

type StatementSubscriptionPayloadObject =
  | StatementSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type StatementSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface StatementSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StatementSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Statement'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StatementSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Statement | null> | prisma.Statement | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'StatementPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StatementSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StatementPreviousValues | null> | prisma.StatementPreviousValues | null
  }
}
  

// Types for StatementPreviousValues

type StatementPreviousValuesObject =
  | StatementPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'data', args?: [] | false, alias?: string  } 

type StatementPreviousValuesFields =
  | 'id'
  | 'data'



  

export interface StatementPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  data: {
    type: 'Json'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface StatementWhereUniqueInput {
  id?: string | null
}
export type StatementWhereUniqueInputInputObject =
  | Extract<keyof StatementWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface StatementWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  AND?: StatementWhereInput[]
  OR?: StatementWhereInput[]
  NOT?: StatementWhereInput[]
}
export type StatementWhereInputInputObject =
  | Extract<keyof StatementWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface StatementCreateInput {
  data?: undefined
}
export type StatementCreateInputInputObject =
  | Extract<keyof StatementCreateInput, string>
  | { name: 'data', alias?: string  } 
  
export interface StatementUpdateInput {
  data?: undefined | null
}
export type StatementUpdateInputInputObject =
  | Extract<keyof StatementUpdateInput, string>
  | { name: 'data', alias?: string  } 
  
export interface StatementUpdateManyMutationInput {
  data?: undefined | null
}
export type StatementUpdateManyMutationInputInputObject =
  | Extract<keyof StatementUpdateManyMutationInput, string>
  | { name: 'data', alias?: string  } 
  
export interface StatementSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: StatementWhereInput | null
  AND?: StatementSubscriptionWhereInput[]
  OR?: StatementSubscriptionWhereInput[]
  NOT?: StatementSubscriptionWhereInput[]
}
export type StatementSubscriptionWhereInputInputObject =
  | Extract<keyof StatementSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type StatementOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'data_ASC'
  | 'data_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  