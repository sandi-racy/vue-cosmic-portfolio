<template lang="jade">
    ul.main-menu
        li.main-menu__list
            router-link(to="/").main-menu__link Home
        li.main-menu__list
            router-link(to="/technologies").main-menu__link Technologies
        li.main-menu__list
            router-link(to="/projects").main-menu__link Projects
        li.main-menu__list
            router-link(to="/open-sources").main-menu__link Open Sources
</template>

<style lang="stylus" scoped>
    .main-menu
        text-align: right

    .main-menu__list
        display: inline-block
        margin-left: 20px

    .main-menu__link
        border-bottom: 1px solid #FFFFFF
        color: #494C4E
        display: inline-block
        padding-bottom: 3px

        &:focus, &:hover
            border-bottom: 1px solid #494C4E
            text-decoration: none
</style>
