import { GraphQLDateTime } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const GQLDate = asNexusMethod(GraphQLDateTime, "dateTime")