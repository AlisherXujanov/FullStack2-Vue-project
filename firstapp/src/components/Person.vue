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
        // person: {
        //     type: Object,
        //     required: true
        // }
    },
    data() {
        return {
            person: {
                name: 'John Doe',
                age: 30,
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                number: '555-555-5555'
            }
        }
    }
}
</script>

<style>

</style>