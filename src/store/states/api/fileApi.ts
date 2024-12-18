import { normalizeImageUri } from '../../../lib/image'

import { baseApi } from './baseApi'


export const fileApi = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		uploadFile: build.mutation<string, File>({
			query: (arg) => {
				const body = new FormData()
				body.append('file', arg)
				return ({
					url: `/files/upload`,
					body,
					method: 'POST',
				})
			},
			transformResponse: (fileUri: string) => normalizeImageUri(fileUri) || '',
		}),
		
	}),
})


export const {
	useUploadFileMutation,
} = fileApi
