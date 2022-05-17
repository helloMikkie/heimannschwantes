<section class="carousel">

    <?php foreach ($page->images()->sortBy('sort', 'desc') as $image) : ?>
        <div class="carousel-cell">
            <?= $image->resize() ?>
         
        </div>
    <?php endforeach ?>

</section>