<template>
   <Layout>
       <h3>Test Route</h3>
       <div>{{$page.googleSheet.Name}}</div>

   </Layout>
</template>
<page-query>
    query Patient ($path: String!) {
        googleSheet(path: $path){
            Name
        }
    }
</page-query>
<script>
export default {
    
}
</script>