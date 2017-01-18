<div id="loginpage">
    <div id="page-wrapper"><div id="page">
            <img src="<?php print base_path() . path_to_theme() . '/' . 'images/startpagina.png'; ?>" id="screenshot"/>

            <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

                    <?php if ($logo): ?>
                        <img src="<?php print base_path() . path_to_theme() . '/' . 'images/logo-grey.png'; ?>"/>
                    <?php endif; ?>
                    <div id="content" class="column"><div class="section">
                            <p>Ook soms geen zin, tijd of kennis om je klusjes te klaren? Hier bij Squirrel helpen we elkaar daarmee. Het vervullen van een dienst voor iemand anders levert Squirrels op. Met die Squirrels kan je taken laten uitvoeren door anderen. Zin om deel te nemen aan dit systeem? Meld je aan en schrijf je in bij een groep in jouw buurt!</p>
                            <a id="main-content"></a>
                            <?php print render($page['help']); ?>
                            <?php if ($action_links): ?>
                                <ul class="action-links">
                                    <?php print render($action_links); ?>
                                </ul>
                            <?php endif; ?>
                            <?php print render($page['content']); ?>
                            <p>Nog geen account? <a href="/user/register">Aanmelden</a></p>

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
