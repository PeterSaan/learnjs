<script setup>
    import { watch } from 'vue';

    const props = defineProps(['ctx', 'x', 'y']);
    
    props.ctx.rect(props.x, props.y, 80, 80);
    props.ctx.fill();

    watch(() => props.x, (newX, oldX) => {
        // props.ctx.clearRect(oldX, props.y, oldX + 80, props.y + 80)
        props.ctx.reset();
        props.ctx.rect(newX, props.y, 80, 80);
        props.ctx.fill();
    });
    watch(() => props.y, (newY, oldY) => {
        // props.ctx.clearRect(props.x, oldY, props.x + 80, oldY + 80)
        props.ctx.reset();
        props.ctx.rect(props.x, newY, 80, 80);
        props.ctx.fill();
    });
</script>