import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroIncludeSchema } from '../inputTypeSchemas/HeroIncludeSchema'
import { HeroWhereUniqueInputSchema } from '../inputTypeSchemas/HeroWhereUniqueInputSchema'
import { HeroCreateInputSchema } from '../inputTypeSchemas/HeroCreateInputSchema'
import { HeroUncheckedCreateInputSchema } from '../inputTypeSchemas/HeroUncheckedCreateInputSchema'
import { HeroUpdateInputSchema } from '../inputTypeSchemas/HeroUpdateInputSchema'
import { HeroUncheckedUpdateInputSchema } from '../inputTypeSchemas/HeroUncheckedUpdateInputSchema'
import { HeroRelationFindManyArgsSchema } from "../outputTypeSchemas/HeroRelationFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { WorkFindManyArgsSchema } from "../outputTypeSchemas/WorkFindManyArgsSchema"
import { HeroCountOutputTypeArgsSchema } from "../outputTypeSchemas/HeroCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HeroSelectSchema: z.ZodType<Prisma.HeroSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  photos: z.boolean().optional(),
  avatar: z.boolean().optional(),
  avatarOrigin: z.boolean().optional(),
  title: z.boolean().optional(),
  cities: z.boolean().optional(),
  userId: z.boolean().optional(),
  fromHeroes: z.union([z.boolean(),z.lazy(() => HeroRelationFindManyArgsSchema)]).optional(),
  toHeroes: z.union([z.boolean(),z.lazy(() => HeroRelationFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  works: z.union([z.boolean(),z.lazy(() => WorkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HeroCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HeroUpsertArgsSchema: z.ZodType<Prisma.HeroUpsertArgs> = z.object({
  select: HeroSelectSchema.optional(),
  include: HeroIncludeSchema.optional(),
  where: HeroWhereUniqueInputSchema,
  create: z.union([ HeroCreateInputSchema,HeroUncheckedCreateInputSchema ]),
  update: z.union([ HeroUpdateInputSchema,HeroUncheckedUpdateInputSchema ]),
}).strict() ;

export default HeroUpsertArgsSchema;
