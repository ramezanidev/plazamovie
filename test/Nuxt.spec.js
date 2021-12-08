import {mount} from '@vue/test-utils';
import {get, setupTest} from '@nuxt/test-utils';
import Home from '@/pages/index.vue';

describe('Nuxt', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home, {
      stubs: {
        NuxtLink: true,
        AppHeader: true,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
