<template lang="jade">
    .page
        .row.introduction
            .col-md-8.col-md-offset-2
                h1.introduction__text {{ metadata.introduction }}

        .row
            .col-md-12
                img(:src="metadata.image.url").img-responsive

        .row.about
            .col-md-8.col-md-offset-2
                label About:
                p {{ metadata.about }}
</template>

<script>
    import Cosmic from 'cosmicjs'

    export default {
        data() {
            return {
                metadata: {
                    about: null,
                    image: {
                        url: null
                    },
                    introduction: null
                }
            }
        },

        mounted() {
            const params = {
                type_slug: 'profiles',
                limit: 1,
                skip: 0
            }
            Cosmic.getObjectsByType(cosmicJsConfig, params, (error, response) => {
                this.metadata = response.object.profile.metadata
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .introduction
        padding-bottom: 80px

    .introduction__text
        line-height: 45px

    .about
        padding-top: 50px
</style>
