// src/pages/Home/HomePage.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="p-4"> 

      <img
        src="/imagens/raio_elektro.png" 
        alt="Raio Elektro"
        className="absolute w-[42px] h-[42px] top-[87.5px] left-[28px] opacity-100 object-contain"
      />
      
      <div
        className="absolute w-[256px] h-[29px] top-[94px] left-[73.36px] opacity-100
                   font-normal text-2xl leading-[100%] text-orange-400
                   flex items-center" 
      >
        Bem-vindo à Elektro!
      </div>

      <div className="pt-[36px] p-4">
        <img
          src="/imagens/Home_Image.jpg" 
          alt="Banner de produtos em destaque"
          className="w-[327px] h-[191px] rounded-2xl opacity-100 block mx-auto mt-4"
        />
       </div>

       <div
        className="absolute top-[348px] left-[158px] opacity-100 flex items-center gap-1"
      >

        <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-gray-300"></div> 
        <div className="w-[12px] h-[12px] rounded-full bg-gray-300"></div>
      </div>

      <div
        className="absolute w-[326px] h-0 border-b border-gray-600 top-[373px] left-[32px] opacity-100"
      ></div>

      <div
        className="absolute w-[150px] h-[20px] top-[385px] left-[32px] opacity-100
                   font-medium text-base leading-none text-black"
      >
        Categorias Elektro
      </div>

      <div
        className="absolute w-[326px] top-[415px] left-[32px] opacity-100
                   flex flex-col gap-[16px]" 
      >

        <div
          className="flex justify-between items-start w-full h-[72px]"
        >
          <div className="flex flex-col items-center">
            <img src="/imagens/Celulares_categoria.png" alt="Celulares" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Celulares</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/Notebooks_categoria.png" alt="Notebooks" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Notebooks</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/Tablets_categoria.png" alt="Tablets" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Tablets</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/Perifericos_categoria.png" alt="Periféricos" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Periféricos</p>
          </div>
        </div>

        <div
          className="flex justify-between items-start w-full h-[72px]"
        >

          <div className="flex flex-col items-center">
            <img src="/imagens/TVs_categoria.png" alt="TVs" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">TVs</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/Acessorios_categoria.png" alt="Acessórios" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Acessórios</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/PCs_categoria.png" alt="PCs" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">PCs</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/imagens/Smartwatches_categoria.png" alt="Smartwatches" className="w-[49px] h-[51px] rounded-full object-cover mb-1" />
            <p className="w-[65px] h-[17px] text-center text-black font-normal text-sm leading-[100%] m-0 flex justify-center items-center">Smartwatches</p>
          </div>
        </div>
      </div>

        <div
        className="absolute w-[326px] h-0 border-b border-gray-700 top-[591px] left-[32px] opacity-100"
      ></div>

      <div
        className="absolute w-[150px] h-[20px] top-[603px] left-[32px] opacity-100
                   font-medium text-base leading-none text-black"
      >
        Para Você
      </div>

      <div
        className="absolute w-[327px] h-[189px] top-[639px] left-[32px] opacity-100
                   flex gap-[20px]"
      >

        <div
          className="w-[155px] h-[189px] rounded-[15.13px] p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/motorola_produto.png" 
            alt="Celular Motorola"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">Celular</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$800,00</p>
            </div>
          </div>
        </div>

        <div
          className="w-[155px] h-[189px] rounded-[15.13px] p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/capaDeCelular_produto.png" 
            alt="Capa Protetora"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">Capa protetora</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$20,00</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute w-[326px] h-0 border-b border-gray-700 top-[844px] left-[32px] opacity-100"
      ></div>

      <div
        className="absolute w-[326px] h-[20px] top-[856px] left-[32px] opacity-100
                   font-medium text-base leading-none text-black"
      >
        Produtos em destaque
      </div>

      <div
        className="absolute w-[327px] h-[189px] top-[892px] left-[32px] opacity-100
                   flex gap-[20px]"
      >
        <div
          className="w-[155px] h-[189px] rounded-[15.13px] p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/smartTV_produto.png" 
            alt="smart TV"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">Smart TV</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$1400,00</p>
            </div>
          </div>
        </div>

        <div
          className="w-[155px] h-[189px] rounded-[15.13px] shadow-product-card p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/monitor_produto.png" 
            alt="monitor"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">Monitor</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$750,00</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute w-[326px] h-0 border-b border-gray-700 top-[1097px] left-[32px] opacity-100"
      ></div>

      <div
        className="absolute w-[326px] h-[20px] top-[1109px] left-[32px] opacity-100
                   font-medium text-base leading-none text-black"
      >
        Mais vendidos
      </div>

      <div
        className="absolute w-[327px] h-[189px] top-[1145px] left-[32px] opacity-100
                   flex gap-[20px]"
      >

        <div
          className="w-[155px] h-[189px] rounded-[15.13px] p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/iPhone_produto.png" 
            alt="iPhone"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">SmartPhone</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$3200,00</p>
            </div>
          </div>
        </div>

        <div
          className="w-[155px] h-[189px] rounded-[15.13px] shadow-product-card p-[9.46px]
                     flex flex-col bg-white gap-[9.46px]"
        >
          <img
            src="/imagens/smartwatch_produto.png" 
            alt="monitor"
            className="w-[136.08px] h-[126.73px] rounded-[15.13px] object-cover block"
          />
          <div className="flex justify-between items-end w-full flex-grow">
            <div className="flex flex-col justify-end flex-shrink min-w-0">
              <p className="text-[13px] text-[#333333] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis m-0">Smartwatch</p>
              <p className="font-bold text-[15px] text-black leading-[1.2] m-0">R$900,00</p>
            </div>
          </div>
        </div>
      </div>

       <div
        className="absolute w-[390px] h-[129px] top-[1418px] left-0 opacity-100 bg-orange-300"
      ></div>

      <div
        className="absolute w-[212px] h-[20px] top-[1463px] left-[89px] opacity-100
                   font-normal text-base leading-none text-black"
      >
        Siga-nos nas redes sociais!
      </div>

    </div>
  );
};

export default HomePage;