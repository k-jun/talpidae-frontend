<script>
    export let px;
</script>

<style>
    .container {
        height: calc(var(--px) * 10);
        width: calc(var(--px) * 10);
        position: relative;
        border: 1px black solid;
    }
    .dot::before {
        content: "";
        position: absolute;
        top: calc(var(--px) * -1);
        left: calc(var(--px) * -1);
        width: var(--px);
        height: var(--px);
        background: transparent;
        box-shadow: calc(var(--px) * 1) calc(var(--px) * 1) 0 #3a5c22,
            calc(var(--px) * 2) calc(var(--px) * 1) 0 #767676,
            calc(var(--px) * 3) calc(var(--px) * 1) 0 #5f5f5f,
            calc(var(--px) * 4) calc(var(--px) * 1) 0 #767676,
            calc(var(--px) * 5) calc(var(--px) * 1) 0 #5f5f5f,
            calc(var(--px) * 6) calc(var(--px) * 1) 0 #3a5c22,
            calc(var(--px) * 7) calc(var(--px) * 1) 0 #5f5f5f,
            calc(var(--px) * 8) calc(var(--px) * 1) 0 #767676,
            calc(var(--px) * 9) calc(var(--px) * 1) 0 #3a5c22,
            calc(var(--px) * 10) calc(var(--px) * 1) 0 #3a5c22,
            calc(var(--px) * 1) calc(var(--px) * 2) 0 #3a5c22,
            calc(var(--px) * 2) calc(var(--px) * 2) 0 #767676,
            calc(var(--px) * 3) calc(var(--px) * 2) 0 #3a5c22,
            calc(var(--px) * 4) calc(var(--px) * 2) 0 #767676,
            calc(var(--px) * 5) calc(var(--px) * 2) 0 #3a5c22,
            calc(var(--px) * 6) calc(var(--px) * 2) 0 #5f5f5f,
            calc(var(--px) * 7) calc(var(--px) * 2) 0 #767676,
            calc(var(--px) * 8) calc(var(--px) * 2) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 2) 0 #3a5c22,
            calc(var(--px) * 10) calc(var(--px) * 2) 0 #767676,
            calc(var(--px) * 1) calc(var(--px) * 3) 0 #3a5c22,
            calc(var(--px) * 2) calc(var(--px) * 3) 0 #3a5c22,
            calc(var(--px) * 3) calc(var(--px) * 3) 0 #767676,
            calc(var(--px) * 4) calc(var(--px) * 3) 0 #3a5c22,
            calc(var(--px) * 5) calc(var(--px) * 3) 0 #5f5f5f,
            calc(var(--px) * 6) calc(var(--px) * 3) 0 #5f5f5f,
            calc(var(--px) * 7) calc(var(--px) * 3) 0 #3a5c22,
            calc(var(--px) * 8) calc(var(--px) * 3) 0 #767676,
            calc(var(--px) * 9) calc(var(--px) * 3) 0 #5f5f5f,
            calc(var(--px) * 10) calc(var(--px) * 3) 0 #3a5c22,
            calc(var(--px) * 1) calc(var(--px) * 4) 0 #3a5c22,
            calc(var(--px) * 2) calc(var(--px) * 4) 0 #5f5f5f,
            calc(var(--px) * 3) calc(var(--px) * 4) 0 #767676,
            calc(var(--px) * 4) calc(var(--px) * 4) 0 #767676,
            calc(var(--px) * 5) calc(var(--px) * 4) 0 #5f5f5f,
            calc(var(--px) * 6) calc(var(--px) * 4) 0 #767676,
            calc(var(--px) * 7) calc(var(--px) * 4) 0 #3a5c22,
            calc(var(--px) * 8) calc(var(--px) * 4) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 4) 0 #5f5f5f,
            calc(var(--px) * 10) calc(var(--px) * 4) 0 #5f5f5f,
            calc(var(--px) * 1) calc(var(--px) * 5) 0 #5f5f5f,
            calc(var(--px) * 2) calc(var(--px) * 5) 0 #3a5c22,
            calc(var(--px) * 3) calc(var(--px) * 5) 0 #3a5c22,
            calc(var(--px) * 4) calc(var(--px) * 5) 0 #5f5f5f,
            calc(var(--px) * 5) calc(var(--px) * 5) 0 #767676,
            calc(var(--px) * 6) calc(var(--px) * 5) 0 #767676,
            calc(var(--px) * 7) calc(var(--px) * 5) 0 #3a5c22,
            calc(var(--px) * 8) calc(var(--px) * 5) 0 #5f5f5f,
            calc(var(--px) * 9) calc(var(--px) * 5) 0 #767676,
            calc(var(--px) * 10) calc(var(--px) * 5) 0 #3a5c22,
            calc(var(--px) * 1) calc(var(--px) * 6) 0 #767676,
            calc(var(--px) * 2) calc(var(--px) * 6) 0 #3a5c22,
            calc(var(--px) * 3) calc(var(--px) * 6) 0 #3a5c22,
            calc(var(--px) * 4) calc(var(--px) * 6) 0 #5f5f5f,
            calc(var(--px) * 5) calc(var(--px) * 6) 0 #767676,
            calc(var(--px) * 6) calc(var(--px) * 6) 0 #767676,
            calc(var(--px) * 7) calc(var(--px) * 6) 0 #5f5f5f,
            calc(var(--px) * 8) calc(var(--px) * 6) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 6) 0 #3a5c22,
            calc(var(--px) * 10) calc(var(--px) * 6) 0 #767676,
            calc(var(--px) * 1) calc(var(--px) * 7) 0 #3a5c22,
            calc(var(--px) * 2) calc(var(--px) * 7) 0 #3a5c22,
            calc(var(--px) * 3) calc(var(--px) * 7) 0 #5f5f5f,
            calc(var(--px) * 4) calc(var(--px) * 7) 0 #5f5f5f,
            calc(var(--px) * 5) calc(var(--px) * 7) 0 #3a5c22,
            calc(var(--px) * 6) calc(var(--px) * 7) 0 #767676,
            calc(var(--px) * 7) calc(var(--px) * 7) 0 #5f5f5f,
            calc(var(--px) * 8) calc(var(--px) * 7) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 7) 0 #5f5f5f,
            calc(var(--px) * 10) calc(var(--px) * 7) 0 #767676,
            calc(var(--px) * 1) calc(var(--px) * 8) 0 #5f5f5f,
            calc(var(--px) * 2) calc(var(--px) * 8) 0 #5f5f5f,
            calc(var(--px) * 3) calc(var(--px) * 8) 0 #767676,
            calc(var(--px) * 4) calc(var(--px) * 8) 0 #3a5c22,
            calc(var(--px) * 5) calc(var(--px) * 8) 0 #5f5f5f,
            calc(var(--px) * 6) calc(var(--px) * 8) 0 #3a5c22,
            calc(var(--px) * 7) calc(var(--px) * 8) 0 #3a5c22,
            calc(var(--px) * 8) calc(var(--px) * 8) 0 #767676,
            calc(var(--px) * 9) calc(var(--px) * 8) 0 #767676,
            calc(var(--px) * 10) calc(var(--px) * 8) 0 #767676,
            calc(var(--px) * 1) calc(var(--px) * 9) 0 #767676,
            calc(var(--px) * 2) calc(var(--px) * 9) 0 #5f5f5f,
            calc(var(--px) * 3) calc(var(--px) * 9) 0 #5f5f5f,
            calc(var(--px) * 4) calc(var(--px) * 9) 0 #767676,
            calc(var(--px) * 5) calc(var(--px) * 9) 0 #3a5c22,
            calc(var(--px) * 6) calc(var(--px) * 9) 0 #3a5c22,
            calc(var(--px) * 7) calc(var(--px) * 9) 0 #5f5f5f,
            calc(var(--px) * 8) calc(var(--px) * 9) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 9) 0 #3a5c22,
            calc(var(--px) * 10) calc(var(--px) * 9) 0 #3a5c22,
            calc(var(--px) * 1) calc(var(--px) * 10) 0 #767676,
            calc(var(--px) * 2) calc(var(--px) * 10) 0 #5f5f5f,
            calc(var(--px) * 3) calc(var(--px) * 10) 0 #767676,
            calc(var(--px) * 4) calc(var(--px) * 10) 0 #3a5c22,
            calc(var(--px) * 5) calc(var(--px) * 10) 0 #5f5f5f,
            calc(var(--px) * 6) calc(var(--px) * 10) 0 #767676,
            calc(var(--px) * 7) calc(var(--px) * 10) 0 #3a5c22,
            calc(var(--px) * 8) calc(var(--px) * 10) 0 #3a5c22,
            calc(var(--px) * 9) calc(var(--px) * 10) 0 #3a5c22,
            calc(var(--px) * 10) calc(var(--px) * 10) 0 #5f5f5f;
    }
</style>

<div class="container" style="--px: {px}">
    <div class="dot" />
</div>
