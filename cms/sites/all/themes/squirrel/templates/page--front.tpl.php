<?php if ($page['sidebar_first']): ?>
    <div id="sidebar-first" class="column sidebar"><div class="section">

            <?php if ($logo): ?>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo" />
                </a>
            <?php endif; ?>
            <?php print render($page['sidebar_first']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
<?php endif; ?>

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

<div id="page-wrapper"><div id="page">

        <div id="header" class="<?php print $secondary_menu ? 'with-secondary-menu': 'without-secondary-menu'; ?>"><div class="section clearfix">

                <?php print render($page['header']); ?>
                <div class="linkicon">
                    <?php if ($secondary_menu): ?>
                        <a href="/node/add"><img src="<?php print base_path() . path_to_theme() . '/' . 'images/new.png'; ?>"/></a>
                        <a href="/transactions"><img src="<?php print base_path() . path_to_theme() . '/' . 'images/squirrel.png'; ?>"/></a>
                        <div id="secondary-menu" class="dropdown navigation">
                            <a class="dropbtn">
                                <img  src="<?php print base_path() . path_to_theme() . '/' . 'images/profile.png'; ?>"/>
                                <div id="username">
                                    <span><?php print $user->name;?></span>
                                </div>
                            </a>
                            <div class="dropdown-content">
                                <?php print theme('links__system_secondary_menu', array(
                                    'links' => $secondary_menu
                                )); ?>
                            </div>
                        </div> <!-- /#secondary-menu -->


                    <?php endif; ?>
                </div>

            </div></div> <!-- /.section, /#header -->

        <?php if ($messages): ?>
            <div id="messages"><div class="section clearfix">
                    <?php print $messages; ?>
                </div></div> <!-- /.section, /#messages -->
        <?php endif; ?>

        <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

                <?php if ($page['content_firstcolumn'] || $page['content_secondcolumn']): ?>
                    <div id="content-columns" class="clearfix">
                        <div class="contentblock startcolumn1">
                            <?php print render($page['content_firstcolumn']); ?>
                        </div>
                        <div class="contentblock startcolumn2">
                            <?php print render($page['content_secondcolumn']); ?>
                        </div>
                    </div> <!-- /#content-columns -->
                <?php endif; ?>

                <div id="content" class="column"><div class="section">
                        <a id="main-content"></a>
                        <?php if ($action_links): ?>
                            <ul class="action-links">
                                <?php print render($action_links); ?>
                            </ul>
                        <?php endif; ?>
                        <?php print render($page['content']); ?>
                        <?php print $feed_icons; ?>

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
-