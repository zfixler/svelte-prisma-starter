<script>
 export let action = '/';
 export let method = 'POST';
</script>

<form class="form" {method} {action}>
    <slot />
</form>

<style>
    .form {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
</style>