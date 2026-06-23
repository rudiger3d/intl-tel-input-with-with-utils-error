<script setup lang="ts">
import IntlTelInput from "@intl-tel-input/vue/with-utils";
import "intl-tel-input/styles";
import type {Iso2, SelectedCountry} from "intl-tel-input";
import {ref, useTemplateRef } from "vue";

const { matchDropdownWidth = true } = defineProps<{
    initialCountry: Iso2
    disabled: boolean
    error?: boolean
    matchDropdownWidth?: boolean
    customPlaceholder?: ((exampleNumber: string, selectedCountry: SelectedCountry) => string)
}>();

const itiModelValue = ref('');

const inputRef = useTemplateRef<InstanceType<typeof IntlTelInput>>('inputRef');

</script>

<template>
    <div class="iti-container" :class="{'error': error}">
        <IntlTelInput
            ref="inputRef"
            :initialCountry="initialCountry"
            :custom-placeholder="customPlaceholder"
            :countrySearch="true"
            countrySelectorMode="DROPDOWN"
            :matchDropdownWidth="matchDropdownWidth"
            :separateDialCode="false"
            :formatAsYouType="false"
            :strictMode="false"
            :disabled="disabled"
            :inputProps="{ autocomplete: 'off' }"
            v-model="itiModelValue"
        />
    </div>
</template>

<style scoped lang="scss">
.iti-container {
    display: inline-block;

    --iti-spacer-horizontal: 9px;

    --iti-arrow-size: 0px;
    --iti-arrow-width: 0px;
    --iti-arrow-padding: 0px;
    --iti-hover-color: white;

    &.error {
        .iti__tel-input {
            border-color: red;
        }
    }
}
.iti__tel-input {
    width: 100%;
    padding-left: 40px !important;
}
</style>