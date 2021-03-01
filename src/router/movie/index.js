export default {
    path:'/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City/city')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon/comingSoon')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying/nowPlaying')
        },
        {
            path : 'search',
            component : () => import('@/components/Search/search')
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}