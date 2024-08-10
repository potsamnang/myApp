import React from "react";

const FooterBar = () => {
  return (
    <div>
      <div class="flex w-screen items-center justify-center mt-20 md:mt-20 h-full bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
          <p class="mb-4">© 2024 Pot Samnang. All Rights my website.</p>
          <ul class="flex justify-center space-x-4">
            <li>
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
