<template>
    <div class="person">
        <h2>{{ person.name }}</h2>
        <p>
            <em>{{ person.info }}</em>
        </p>
        <footer>
            {{ person.age }}

            <div class="right">
                <small>{{person.number}}</small>
                <button>Call</button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Person',
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>

</style>