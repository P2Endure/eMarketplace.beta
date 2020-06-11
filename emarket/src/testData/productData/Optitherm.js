export default { fenestrationDetail :  `
        Optitherm_SummerMode,  	! Name
        Window,          		! Surface Type
        BGT_Window,      		! Construction Name
        Z01_S05_W01,     		! Building Surface Name
        ,                		! Outside Boundary Condition Object
        0.5,             		! View Factor to Ground
        ,                		! Name of shading control
        ,                		! WindowFrameAndDivider Name
        1,               		! Multiplier
        4,               		! NVertex [AREA=5.29]
`
,
simpleGlazing : `
        WindowMaterial:SimpleGlazingSystem,
        BGTec_Double_Pane_Window_(10mm),	    ! Name
        1.3,             			            ! U-Factor
        0.45,           			            ! Solar Heat Gain Coefficient
        0.7;                			        ! Visible Transmittance (*)           
`
,
construction : `
            Construction,
            BGT_Window, 			            ! Name
            BGTec_Triple_Pane_Window_(10mm);	! Outside Layer
`
}      