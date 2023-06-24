
let footer=()=>{
return `
<div class="footer-classic-body section-lg">
    <div class="container">
        <div class="row row-40 row-md-50 justify-content-xl-between">
            <div class="col-sm-6 col-lg-4 col-xl-3 wow fadeInRight">
                <div class="footer-classic-brand"><a class="brand" href="index.html"><img
                            class="brand-logo-dark" src="images/logo-default-93-27.png" alt="" /><img
                            class="brand-logo-light" src="images/logo-inverset-93-27.png" alt="" /></a>
                </div>
                <p class="l-spacing-normal">WebPerfection Agency: Crafting Captivating Websites for
                    Impactful Online Presence. Elevate your brand with our top-notch web design and
                    development services. Let's create something extraordinary together. Contact us now.</p>
                <div class="footer-classic-social">
                    <div class="group-lg group-middle">
                        <p>Get Social</p>
                        <div>
                            <ul class="list-inline list-social list-inline-sm">
                                <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                                <li><a class="icon mdi mdi-gmail" href="#"></a></li>
                                <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                                <li><a class="icon mdi mdi-google" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 wow fadeInRight" data-wow-delay=".1s">
                <h4 class="footer-classic-title">Contacts</h4>
                <ul class="contacts-creative">
                    <!-- <li>
                        <div class="unit unit-spacing-sm flex-column flex-md-row">
                            <div class="unit-left"><span class="icon mdi mdi-map-marker"></span></div>
                            <div class="unit-body"><a href="#"><br/>Mountain View, CA 94041 USA</a></div>
                        </div>
                    </li> -->
                    <li>
                        <div class="unit unit-spacing-sm flex-column flex-md-row">
                            <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                            <div class="unit-body"><a class="link-black" href="tel:#">+918888888888</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="unit unit-spacing-sm flex-column flex-md-row">
                            <div class="unit-left"><span class="icon mdi mdi-email-outline"></span></div>
                            <div class="unit-body"><a class="link-black"
                                    href="mailto:#">WebPerfection2023@gmail.com</a></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
                <h4 class="footer-classic-title">Newsletter</h4>
                <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and
                    exclusive discounts.</p>
                <!-- RD Mailform-->
                <form class="rd-form rd-mailform rd-form-inline rd-form-inline-2"
                    data-form-output="form-output-global" data-form-type="subscribe" method="post"
                    action="bat/rd-mailform.php">
                    <div class="form-wrap">
                        <input class="form-input" id="subscribe-form-2-email" type="email" name="email"
                            data-constraints="@Email @Required" />
                        <label class="form-label" for="subscribe-form-2-email">Enter your e-mail</label>
                    </div>
                    <div class="form-button">
                        <button class="button button-icon-2 button-zakaria button-primary"
                            type="submit"><span class="fl-bigmug-line-paper122"></span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="footer-classic-panel">
    <div class="container">
        <div class="row row-10 align-items-center justify-content-sm-between">
            <div class="col-md-auto">
                <p class="rights"><span>&copy;&nbsp;</span><span
                        class="copyright-year"></span><span>&nbsp;</span><span>WebPerfection</span><span>.&nbsp;</span><span>All
                        rights reserved</span><span>.&nbsp;</span></p>
            </div>
            <div class="col-md-auto order-md-1"><a href="privacy-policy.html">Privacy Policy</a></div>
        </div>
    </div>
</div>`;
}

let preloader=()=>{
    return `<div class="preloader-body">
    <div class="cssload-bell">
        <div class="cssload-circle">
            <div class="cssload-inner"></div>
        </div>
        <div class="cssload-circle">
            <div class="cssload-inner"></div>
        </div>
        <div class="cssload-circle">
            <div class="cssload-inner"></div>
        </div>
        <div class="cssload-circle">
            <div class="cssload-inner"></div>
        </div>
        <div class="cssload-circle">
            <div class="cssload-inner"></div>
        </div>
        
    </div>
    <h6>WebPerfection</h6>
</div>`
}
export {footer,preloader};