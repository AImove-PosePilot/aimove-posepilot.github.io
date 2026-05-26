/**
 * @author mrdoob / http://mrdoob.com/
 */

import { UIButton, UIDiv, UIPanel, UISpan, UIText } from "./libs/ui.js"

import { SidebarAnimation } from "./SidebarAnimation.js"
import { SidebarProject } from "./SidebarProject.js"
import { SidebarRender } from "./SidebarRender.js"
import { runRecompile } from "../../../src/scripts/store.js"

function Sidebar(editor) {
	var container = new UIPanel()
	container.setId("sidebar")

	// --- Recompile button ----------------------------------------------------
	// Global control: apply the current bar layout (offset + trimStart/trimEnd)
	// to the 3D playback and the plots. In Pass 1 this is a stub — the button
	// exists, highlights when a bar change is pending, and logs on click.
	// Pass 2 will swap the body for the real recomputeAll() implementation.
	var recompileBtn = new UIButton("Recompile")
	recompileBtn.dom.id = "recompile-btn"
	recompileBtn.onClick(function () {
		console.log("[Recompile] clicked — running recomputeAll()")
		recompileBtn.dom.classList.remove("pending")
		runRecompile()
	})
	container.add(recompileBtn)

	editor.signals.animationModified.add(function () {
		recompileBtn.dom.classList.add("pending")
	})
	editor.signals.animationAdded.add(function () {
		recompileBtn.dom.classList.add("pending")
	})
	editor.signals.animationRemoved.add(function () {
		recompileBtn.dom.classList.add("pending")
	})

	//

	var animationTab = new UIText("ANIMATION").onClick(onClick)
	var projectTab = new UIText("PROJECT").onClick(onClick)
	var renderTab = new UIText("RENDER").onClick(onClick)

	var tabs = new UIDiv()
	tabs.setId("tabs")
	// tabs.add(animationTab, projectTab, renderTab)
	tabs.add(animationTab, projectTab)

	container.add(tabs)

	function onClick(event) {
		select(event.target.textContent)
	}

	//

	var animation = new UISpan().add(new SidebarAnimation(editor))
	container.add(animation)

	var project = new UISpan().add(new SidebarProject(editor))
	container.add(project)

	var render = new UISpan().add(new SidebarRender(editor))
	container.add(render)

	//

	function select(section) {
		animationTab.setClass("")
		projectTab.setClass("")
		renderTab.setClass("")

		animation.setDisplay("none")
		project.setDisplay("none")
		render.setDisplay("none")

		switch (section) {
			case "ANIMATION":
				animationTab.setClass("selected")
				animation.setDisplay("")
				break
			case "PROJECT":
				projectTab.setClass("selected")
				project.setDisplay("")
				break
			case "RENDER":
				renderTab.setClass("selected")
				render.setDisplay("")
				break
		}
	}

	select("ANIMATION")

	return container
}

export { Sidebar }
