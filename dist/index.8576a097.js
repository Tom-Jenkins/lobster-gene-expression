                            <span style="display:inline-block;margin-bottom:1px;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${t[0].color}"></span>
                            <span class="fw-bold fs-6">${t[0].name}</span>
                            </br>
                            <span>Replicate 1: <strong class="px-2">${t[1].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 2: <strong class="px-2">${t[2].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 3: <strong class="px-2">${t[3].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 4: <strong class="px-2">${t[4].value[1].toFixed(2)}</strong></span>
                        `),4===t.length&&(e+=`
                            <span style="display:inline-block;margin-bottom:1px;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${t[0].color}"></span>
                            <span class="fw-bold fs-6">${t[0].name}</span>
                            </br>
                            <span>Replicate 1: <strong class="px-2">${t[0].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 2: <strong class="px-2">${t[1].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 3: <strong class="px-2">${t[2].value[1].toFixed(2)}</strong></span>
                            </br>
                            <span>Replicate 4: <strong class="px-2">${t[1].value[1].toFixed(2)}</strong></span>
                        `),1===t.length&&(e+=`
                            <span style="display:inline-block;margin-bottom:1px;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${t[0].color}"></span>
                            <span class="fw-bold fs-6">${t[0].name}</span>
                        `),e}},axisPointer:{snap:!1},color:zb,title:{text:`Gene: ${i}`},legend:{show:!0,left:"right",formatter:"Toggle {name}",itemStyle:{color:"#2c3e50",opacity:"0.50",borderColor:"transparent"},inactiveBorderColor:"transparent",selected:{Boxplot:!0,"Raw Data":!0}},xAxis:{type:"category",boundaryGap:!0,splitArea:{show:!1},splitLine:{show:!1},axisLabel:{rotate:90,margin:5,fontSize:15}},yAxis:{type:"value",name:"Expression (VST normalisation)",nameLocation:"center",nameGap:50,splitArea:{show:!0},min:s,max:l},grid:{bottom:"25%"},toolbox:{show:!0,itemSize:20,orient:"vertical",top:"10%",right:"1%",feature:{dataZoom:{},saveAsImage:{type:"png",name:`${i}_expression`,title:"Save as PNG",pixelRatio:5}}}};t.setOption(u)}}const zS="https://raw.githubusercontent.com/Tom-Jenkins/LobsterGeneX/prototype/data/vst_normalised_counts_matrix_3decplace.csv";oe(zS,function(t){let e=t.map(t=>t.Gene),n=document.getElementById("gene-list");for(let t=0;t<e.length;t++){let i=document.createElement("option"),r=e[t];i.value=r,n.appendChild(i)}}),setTimeout(()=>{document.getElementById("dna-spinner").classList.add("hidden"),document.getElementById("gene-selection-container").classList.remove("hidden")},3e3),document.getElementById("plot-bttn").addEventListener("click",t=>{t.preventDefault(),oe(zS,zw)}),window.onresize=function(){t.resize()};
//# sourceMappingURL=index.8576a097.js.map