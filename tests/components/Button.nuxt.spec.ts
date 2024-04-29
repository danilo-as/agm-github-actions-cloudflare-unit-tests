import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import Button from "../../components/Button.vue"

describe('Button', () => {
    it('component render with default type', () => {
        const wrapper = mount(Button, {
            slots: {
                default: 'Primary'
            }
        })
        expect(wrapper.text()).toContain('Primary')
        expect(wrapper.classes().includes('btn-primary')).toBeTruthy()
    })

    it('component render with secondary type', () => {
        const wrapper = mount(Button, {
            props: {
                type: 'secondary'
            },
            slots: {
                default: 'Secondary'
            }
        })
        expect(wrapper.text()).toContain('Secondary')
        expect(wrapper.classes().includes('btn-secondary')).toBeTruthy()
    })
})