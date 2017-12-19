<template lang="jade">
    .page
        .row
            .col-md-8.col-md-offset-2
                .row.technology__introduction
                    .col-md-12
                        h1 Technologies that I use

                .row
                    .col-md-4(v-for="technology in technologies")
                        img(:src="technology.metadata.image.url").img-responsive
</template>

<script>
    import Cosmic from 'cosmicjs'

    export default {
        data() {
            return {
                technologies: []
            }
        },

        mounted() {
            const params = {
                type_slug: 'technologies',
                limit: 50,
                skip: 0,
                sort: 'created_at'
            }
            Cosmic.getObjectsByType(cosmicJsConfig, params, (error, response) => {
                this.technologies = response.objects.all
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .technology__introduction
        padding-bottom: 50px
</style>
