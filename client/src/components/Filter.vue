<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
    <v-row justify="space-around">
        <v-col cols="auto">
                <v-chip-group mandatory selected-class="text-primary">
                    <v-chip v-if="Filter.tStatus" @click="onFilter(value)" v-for="(value, n) in Filter.tStatus" :key="n">
                        {{ value}}
                    </v-chip>
                    <v-chip v-if="Filter.tTags" @click="onFilter(value)" v-for="(value, n2) in Filter.tTags" :key="n2">
                        {{ value }}
                    </v-chip>
                </v-chip-group>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
interface Props {
    tStatus?: {},
    tTags?: {}
}

const Filter = defineProps<Props>()

const emit = defineEmits<{
    (e: 'filter', fltr: string): void
}>()

const onFilter = (fltr: string) => {
    emit('filter', fltr)
}

</script>