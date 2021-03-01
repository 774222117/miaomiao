<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div id="content">
            <Login />
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header/header';
import TabBar from '@/components/TabBar/tabbar';
import Login from '@/components/Login/login';

export default {
    name:'Mine',
    components:{
        Header,
        TabBar,
        Login
    },
    data(){
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    
</style>