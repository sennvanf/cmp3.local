<div id="registerpage">
    <div id="page-wrapper"><div id="page">

            <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

                    <?php if ($logo): ?>
                        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo" />
                    <?php endif; ?>
                    <div id="content" class="column"><div class="section">
                            <a id="main-content"></a>
                            <?php print render($page['help']); ?>
                            <?php if ($action_links): ?>
                                <ul class="action-links">
                                    <?php print render($action_links); ?>
                                </ul>
                            <?php endif; ?>
                            <?php print render($page['content']); ?>
                            <p>Al een account? <a href="/user/login">Inloggen</a></p>

                        </div></div> <!-- /.section, /#content -->


                </div></div> <!-- /#main, /#main-wrapper -->

            <div id="footer-wrapper"><div class="section">

                    <?php if ($page['footer_firstcolumn'] || $page['footer_secondcolumn'] || $page['footer_thirdcolumn']): ?>
                        <div id="footer-columns" class="clearfix">
                            <div class="footerblock">
                                <?php print render($page['footer_firstcolumn']); ?>
                            </div>
                            <div class="footerblock">
                                <?php print render($page['footer_secondcolumn']); ?>
                            </div>
                            <div class="footerblock">
                                <?php print render($page['footer_thirdcolumn']); ?>
                            </div>


                        </div> <!-- /#footer-columns -->
                    <?php endif; ?>

                    <?php if ($page['footer']): ?>
                        <div id="footer" class="clearfix">
                            <?php print render($page['footer']); ?>
                        </div> <!-- /#footer -->
                    <?php endif; ?>

                </div></div> <!-- /.section, /#footer-wrapper -->

        </div></div> <!-- /#page, /#page-wrapper -->

</div>
