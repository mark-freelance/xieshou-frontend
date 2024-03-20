import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema } from './EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema';
import { WorkUpdateconnectionsInputSchema } from './WorkUpdateconnectionsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WorkRelationUncheckedUpdateManyWithoutToNestedInputSchema } from './WorkRelationUncheckedUpdateManyWithoutToNestedInputSchema';

export const WorkUncheckedUpdateWithoutFromWorksInputSchema: z.ZodType<Prisma.WorkUncheckedUpdateWithoutFromWorksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  heroId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  layout: z.union([ z.lazy(() => TypographyLayoutTypeSchema),z.lazy(() => EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  connections: z.union([ z.lazy(() => WorkUpdateconnectionsInputSchema),z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  toWorks: z.lazy(() => WorkRelationUncheckedUpdateManyWithoutToNestedInputSchema).optional()
}).strict();

export default WorkUncheckedUpdateWithoutFromWorksInputSchema;
