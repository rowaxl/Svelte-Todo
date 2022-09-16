<script>
  import { Link } from "svelte-routing";

  export let to = "";

  const ACTIVE_CLASS = "bg-gray-700 text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
  const DEACTIVE_CLASS = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === to ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: ACTIVE_CLASS };
    }
    return { class: DEACTIVE_CLASS };
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot />
</Link>