<template lang="jade">
    .page
        .row
            .col-md-8.col-md-offset-2
                .row.projects__introduction
                    .col-md-12
                        h1 Samples of some of my work

                .row.projects__list(v-for="project in projects")
                    .col-md-12
                        a(:href="project.metadata.url" target="_blank")
                            img(:src="project.metadata.image.url").img-responsive
                        h3.project__title {{ project.title }}: {{ project.metadata.short_description }}
                        span.projects__technology {{ renderTechnologies(project.metadata.technologies) }}
</template>

<script>
    import Cosmic from 'cosmicjs'

    export default {
        data() {
            return {
                projects: null
            }
        },

        methods: {
            renderTechnologies(technologies) {
                let result = technologies.map((technology) => {
                    return technology.title
                })

                return result.join(', ')
            }
        },

        mounted() {
            const params = {
                type_slug: 'projects',
                metafield_key: 'open_source',
                metafield_value: 'No',
                limit: 50,
                skip: 0,
                sort: 'created_at'
            }
            Cosmic.getObjectsBySearch(cosmicJsConfig, params, (error, response) => {
                this.projects = response.objects.all
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .projects__introduction
        padding-bottom: 50px

    .projects__list
        padding-bottom: 50px

        &:last-child
            padding-bottom: 0px

    .projects__title
        font-size: 13px
        padding: 20px 0px

    .projects__technology
        font-size: 12px
</style>
