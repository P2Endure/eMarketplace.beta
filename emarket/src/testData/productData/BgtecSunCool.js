export default { 
fenestrationDetail: `
            Suncool50/25_SummerMode,  	! Name
            Window,          		    ! Surface Type
            BGT_Window,      		    ! Construction Name
            Z01_S05_W01,     		    ! Building Surface Name
            ,                			! Outside Boundary Condition Object
            0.5,             			! View Factor to Ground
            ,                			! Name of shading control
            ,                			! WindowFrameAndDivider Name
            1,               			! Multiplier
`,
simpleGlazing:  `
            WindowMaterial:SimpleGlazingSystem,
            BGTec_Triple_Pane_Window_(10mm),	    ! Name
            1.0,             			            ! U-Factor
            0.24,           			            ! Solar Heat Gain Coefficient
            0.45;                			        ! Visible Transmittance (*)
`,

construction: `
            Construction,
            BGT_Window, 			                ! Name
            BGTec_Triple_Pane_Window_(10mm);		! Outside Layer
`
}   