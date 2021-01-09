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

        width: calc(var(--px) * 1);
        height: calc(var(--px) * 1);
        background: transparent;

        box-shadow: calc(var(--px) * 1) calc(var(--px) * 1) 0 #cfb53b,
            calc(var(--px) * 1) calc(var(--px) * 1) 0 #cfb53b,
            calc(var(--px) * 2) calc(var(--px) * 1) 0 #d4af37,
            calc(var(--px) * 3) calc(var(--px) * 1) 0 #cfb53b,
            calc(var(--px) * 4) calc(var(--px) * 1) 0 #d4af37,
            calc(var(--px) * 5) calc(var(--px) * 1) 0 #cfb53b,
            calc(var(--px) * 6) calc(var(--px) * 1) 0 #d4af37,
            calc(var(--px) * 7) calc(var(--px) * 1) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 1) 0 #cfb53b,
            calc(var(--px) * 9) calc(var(--px) * 1) 0 #d4af37,
            calc(var(--px) * 10) calc(var(--px) * 1) 0 #ffdf00,
            calc(var(--px) * 1) calc(var(--px) * 2) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 2) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 2) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 2) 0 #d4af37,
            calc(var(--px) * 5) calc(var(--px) * 2) 0 #d4af37,
            calc(var(--px) * 6) calc(var(--px) * 2) 0 #cfb53b,
            calc(var(--px) * 7) calc(var(--px) * 2) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 2) 0 #d4af37,
            calc(var(--px) * 9) calc(var(--px) * 2) 0 #d4af37,
            calc(var(--px) * 10) calc(var(--px) * 2) 0 #d4af37,
            calc(var(--px) * 1) calc(var(--px) * 3) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 3) 0 #ffdf00,
            calc(var(--px) * 3) calc(var(--px) * 3) 0 #cfb53b,
            calc(var(--px) * 4) calc(var(--px) * 3) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 3) 0 #d4af37,
            calc(var(--px) * 6) calc(var(--px) * 3) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 3) 0 #cfb53b,
            calc(var(--px) * 8) calc(var(--px) * 3) 0 #cfb53b,
            calc(var(--px) * 9) calc(var(--px) * 3) 0 #d4af37,
            calc(var(--px) * 10) calc(var(--px) * 3) 0 #ffdf00,
            calc(var(--px) * 1) calc(var(--px) * 4) 0 #d4af37,
            calc(var(--px) * 2) calc(var(--px) * 4) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 4) 0 #d4af37,
            calc(var(--px) * 4) calc(var(--px) * 4) 0 #d4af37,
            calc(var(--px) * 5) calc(var(--px) * 4) 0 #d4af37,
            calc(var(--px) * 6) calc(var(--px) * 4) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 4) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 4) 0 #cfb53b,
            calc(var(--px) * 9) calc(var(--px) * 4) 0 #ffdf00,
            calc(var(--px) * 10) calc(var(--px) * 4) 0 #ffdf00,
            calc(var(--px) * 1) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 5) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 5) 0 #cfb53b,
            calc(var(--px) * 6) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 5) 0 #d4af37,
            calc(var(--px) * 9) calc(var(--px) * 5) 0 #d4af37,
            calc(var(--px) * 10) calc(var(--px) * 5) 0 #ffdf00,
            calc(var(--px) * 1) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 6) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 6) 0 #cfb53b,
            calc(var(--px) * 6) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 6) 0 #cfb53b,
            calc(var(--px) * 9) calc(var(--px) * 6) 0 #ffdf00,
            calc(var(--px) * 10) calc(var(--px) * 6) 0 #cfb53b,
            calc(var(--px) * 1) calc(var(--px) * 7) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 7) 0 #ffdf00,
            calc(var(--px) * 3) calc(var(--px) * 7) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 7) 0 #cfb53b,
            calc(var(--px) * 5) calc(var(--px) * 7) 0 #ffdf00,
            calc(var(--px) * 6) calc(var(--px) * 7) 0 #d4af37,
            calc(var(--px) * 7) calc(var(--px) * 7) 0 #d4af37,
            calc(var(--px) * 8) calc(var(--px) * 7) 0 #cfb53b,
            calc(var(--px) * 9) calc(var(--px) * 7) 0 #ffdf00,
            calc(var(--px) * 10) calc(var(--px) * 7) 0 #cfb53b,
            calc(var(--px) * 1) calc(var(--px) * 8) 0 #d4af37,
            calc(var(--px) * 2) calc(var(--px) * 8) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 6) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 9) calc(var(--px) * 8) 0 #d4af37,
            calc(var(--px) * 10) calc(var(--px) * 8) 0 #ffdf00,
            calc(var(--px) * 1) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 2) calc(var(--px) * 9) 0 #d4af37,
            calc(var(--px) * 3) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 4) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 9) 0 #cfb53b,
            calc(var(--px) * 6) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 8) calc(var(--px) * 9) 0 #ffdf00,
            calc(var(--px) * 9) calc(var(--px) * 9) 0 #cfb53b,
            calc(var(--px) * 10) calc(var(--px) * 9) 0 #cfb53b,
            calc(var(--px) * 1) calc(var(--px) * 10) 0 #d4af37,
            calc(var(--px) * 2) calc(var(--px) * 10) 0 #cfb53b,
            calc(var(--px) * 3) calc(var(--px) * 10) 0 #cfb53b,
            calc(var(--px) * 4) calc(var(--px) * 10) 0 #ffdf00,
            calc(var(--px) * 5) calc(var(--px) * 10) 0 #d4af37,
            calc(var(--px) * 6) calc(var(--px) * 10) 0 #ffdf00,
            calc(var(--px) * 7) calc(var(--px) * 10) 0 #cfb53b,
            calc(var(--px) * 8) calc(var(--px) * 10) 0 #ffdf00,
            calc(var(--px) * 9) calc(var(--px) * 10) 0 #cfb53b,
            calc(var(--px) * 10) calc(var(--px) * 10) 0 #cfb53b;
    }
</style>

<div class="container" style="--px: {px}">
    <div class="dot" />
</div>
