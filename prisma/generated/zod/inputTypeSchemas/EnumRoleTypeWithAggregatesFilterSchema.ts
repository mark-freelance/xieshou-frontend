import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { NestedEnumRoleTypeWithAggregatesFilterSchema } from './NestedEnumRoleTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRoleTypeFilterSchema } from './NestedEnumRoleTypeFilterSchema';

export const EnumRoleTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleTypeSchema).optional(),
  in: z.lazy(() => RoleTypeSchema).array().optional(),
  notIn: z.lazy(() => RoleTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleTypeSchema),z.lazy(() => NestedEnumRoleTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleTypeFilterSchema).optional()
}).strict();

export default EnumRoleTypeWithAggregatesFilterSchema;
