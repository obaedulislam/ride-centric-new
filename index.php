<!DOCTYPE html>
<html lang="en">
    <?php include "bundle.php"; ?>
    <body>
        <!-- =====| Header section Start |=====-->
            <?php include "header.php"; ?>
        <!-- =====| Header section End |=====-->

        <!-- =====| Main Section Start Here |===== -->
        <main>
            <!-- Banner section Start -->
             <section class="banner-section" >
                <div class="banner-slides" id="banner-slides">
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-1.webp);"></div>
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-2.webp);"></div>
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-3.webp);"></div>
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-4.webp);"></div>
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-5.webp);"></div>
                    <div class="banner-bg" style="background-image:url(images/home/banner/slide-6.webp);"></div>  
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 form-container">
                            <div class="booking-form">
                                <div class="form-text">
                                    <h5 class="heading-before">ON-THE-GO, <strong>UNDER 60 SECONDS<strong></h5>
                                </div>
                                <div class="booking-navigation-tab">
                                    <div class="nav-tab-btn">
                                        <a class="tab-item " href="#">One Way</a>
                                        <a class="tab-item active" href="#">Hourly</a>
                                    </div>
                                    <div class="information-icon">
                                        <a class="car-info-icon" href="javascript:void(0)">
                                            <span class="icon-info"></span>
                                            <!-- <div class="row popup-car-info">
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="info">
                                                        <h3 class="info-title">
                                                        TOP <strong>10 Choices</strong>
                                                        </h3>
                                                        <div class="all-car" >
                                                            <div class="single-car" id = "singleCarContainer" >
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </a>
                                    </div>
                                </div>
                                <div class="form-input">
                                    <div class="row">
                                        <div class="col-6">
                                            <form action="">
                                                <span class="icon-calander icon"></span>
                                                <input type="text" id="date" name="date" placeholder="Date">
                                            </form>
                                        </div>
                                        <div class="col-6">
                                            <form action="">
                                                <span class="icon-clock icon"></span>
                                                <input type="text" id="time" name="time" placeholder="time">
                                            </form>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12">
                                            <form action="">
                                                <span class="icon-location icon"></span>
                                                <input type="text" id="date" name="location" placeholder="Pickup Location">
                                            </form>
                                        </div>
                                    </div>
                                    <div class=" mt-xl-5 mt-lg-3 mt-md-2 mt-1 mb-md-3 text-end">
                                        <a href="" class="button primary-button">reserve</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Banner section End -->
            
            <!-- CLient Logo section Start -->
            <section class="client-logos">
                <div class="container">
                    <div class="logos">
                        
                    </div>
                </div>
            </section>
            <!-- CLient Logo section End -->
        </main>
        <!-- =====| Main Section End Here |===== -->

        <!-- =====| Footer section Start |=====-->
            <?php include "footer.php"; ?>
        <!-- =====| Footer section End |=====-->


    </body>
</html>