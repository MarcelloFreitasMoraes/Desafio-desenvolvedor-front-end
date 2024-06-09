'use client'

import { useQuery } from '@tanstack/react-query'
import { ListData } from './types'
import { http } from '@/config/http'
import stale from '@/utils/stale'

export default function useListData(id?: string | string[] | undefined) {
    const query = useQuery<ListData>(
        [['list'], id],
        () =>
            http
                .get(id ? `/frutas/list/${id}.json/` : `/frutas/list.json`)
                .then((res) => {
                    return res?.data || {}
                })
                .catch((error) => console.log(error)),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )

    return {
        ListProductsQuery: query?.data,
        LoadingListProducts: query.isLoading,
    }
}
