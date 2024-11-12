<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import "$lib/components/Style.css"
  import { base } from '$app/paths';
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Auto Lotto</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl class="menubar">
    <NavLi href="{base}/" class="menutext">로또</NavLi>
    <NavLi href="{base}/Pension" class="menutext">연금 복권</NavLi>
  </NavUl>
</Navbar>
