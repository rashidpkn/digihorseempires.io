import { useEffect, useRef } from "react";
// import { WalletPay } from "../components";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import {useCheckMobileScreen} from '../../global/utils'

const tokenSupply = 1125000000


function am4themes_myTheme(target) {
    if (target instanceof am4core.ColorSet) {
        target.list = [
            am4core.color("#53cc5e"),
            am4core.color("#22372b"),
            am4core.color("#4b5c52"),
            am4core.color("#418556"),
            am4core.color("#d0e4c6"),
            am4core.color("#566b64")
        ];
    }
}


const Tokenomics = () => {
    const isMobile = false // useCheckMobileScreen()

    useEffect(() => {
        // removes watermark
        am4core.addLicense('ch-custom-attribution')

        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_myTheme);
        // Themes end


        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.legend = new am4charts.Legend();

        chart.data = [
            {
                category: "Presale",
                token: (tokenSupply * 40) / 100
            },
         
            {
                category: "Treasury",
                token: (tokenSupply * 10) / 100
            },
            {
                category: "Team",
                token: (tokenSupply * 15) / 100
            },
            {
                category: "Marketing",
                token: (tokenSupply * 10) / 100
            },
            {
                category: "Liquidity",
                token: (tokenSupply * 15) / 100
            },
            {
                category: "Rewards",
                token: (tokenSupply * 10) / 100
            },
        ];
        chart.innerRadius = isMobile ? 50 : 100;
        chart.depth = isMobile ? 50 : 100;
        chart.legend.disabled = !isMobile
        chart.legend.labels.template.fill = am4core.color("#ffffff");
        chart.legend.valueLabels.template.fill = am4core.color("#4b5c52");
        // chart.legend.valueLabels.template.text  = "[bold {color}]{category}"
        chart.legend.fill = am4core.color("#ffffff")
        chart.responsive.enabled = true

        // chart.colors.list = [
        //     am4core.color("#845EC2"),
        // ];

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "token";
        series.dataFields.category = "category";
        series.dataFields.depthValue = "token";
        series.labels.template.fill = am4core.color("#ffffff")
        series.ticks.template.stroke = am4core.color("#ffffff")
        series.ticks.template.strokeWidth = 4
        series.ticks.template.disabled = isMobile
        series.labels.template.disabled = isMobile
        series.legendSettings.labelText = "{name} [bold {color}]{value}";
    }, [isMobile])


    // {(store.config?.current_presale_stage_details?.token_to_sell * item.value) / 100}


    return (
        <section className='md:h-[80vh]   relative' id="path_roadmap">
            <h3 className='text-center text-4xl md:text-[4em] mt-12 font-slant tokonomics_text_target mb-16 text-white'>TOKENOMICS</h3>
            <div id="chartdiv" className="min-h-[60vh]"></div>
            <div className='w-[15vw] h-[15vw] bg-primary absolute bottom-[20%] left-[45%] blur-[120px] -z-40' />
        </section>
    )
}
export default Tokenomics