<script>
  import { Navbar, NavBrand, NavLi, NavUl } from 'flowbite-svelte';
  import "$lib/components/Style.css"
  import { base } from '$app/paths';
</script>

<Navbar class="flex justify-center w-full">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Auto Lotto</span>
  </NavBrand>
  <NavUl >
    <NavLi href="{base}/" class="menutext">로또</NavLi>
    <NavLi href="{base}/Pension" class="menutext">연금 복권</NavLi>
  </NavUl>
</Navbar>
