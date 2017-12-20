<template lang="jade">
    .container
        .row
            .col-md-5.col-md-offset-7
                main-menu

        router-view

        .row.footer.text-center
            .col-md-12.social-media
                a(:href="metadata.facebook" target="_blank").social-media__list
                    i.fa.fa-facebook-official
                a(:href="metadata.twitter" target="_blank").social-media__list
                    i.fa.fa-twitter-square
                a(:href="metadata.github" target="_blank").social-media__list
                    i.fa.fa-github-square
            .col-md-12
                span {{ metadata.footer }}
</template>

<script>
    import Cosmic from 'cosmicjs'
    import MainMenu from './MainMenu.vue'

    export default {
        components: {
            MainMenu
        },

        data() {
            return {
                metadata: {
                    facebook: null,
                    footer: null,
                    github: null,
                    twitter: null
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
            });
        }
    }
</script>

<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans')

    .html
        border: 10px solid #494C4E
        font-family: 'Open Sans'
        font-size: 15px
        padding: 30px 0px

    .page
        padding: 80px

    .social-media
        font-size: 17px

    .social-media__list
        color: #494C4E
        display: inline-block
        padding: 0px 5px

    @media screen and (max-width: 600px)
        .page
            padding: 40px
</style>
