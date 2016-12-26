<?php

namespace Service;

use Symfony\Component\DependencyInjection\ContainerBuilder;

/**
 * Service Container
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Container
{
	/**
	 * @var Symfony\Component\DependencyInjection\ContainerBuilder
	 */
	private $ContainerBuilder;

	public function __construct()
	{
		$this->ContainerBuilder = new ContainerBuilder();
		$this->buildContainer();
	}
	
	/**
	 * Get a single service
	 * @param string
	 * @return mixed
	 */
	public function get($service)
	{
		// would have logging/error handling for invalid service
		return $this->ContainerBuilder->get($service);
	}

	/**
	 * @return Symfony\Component\DependencyInjection\ContainerBuilder
	 */
	public function getContainer()
	{
		return $this->ContainerBuilder;
	}

	/** 
	 * Build the service container
	 */
	private function buildContainer()
	{
		// rabbitmq client
		$this->ContainerBuilder->register('rabbit-client')
			 ->setFactoryClass("Broker\RabbitClient")
	         ->setFactoryMethod("getInstance");

		// rabbitmq handler
		$this->ContainerBuilder->register('rabbit-handler', 'Broker\RabbitHandler')
		     ->addArgument(new Logger());

		// logger
		$this->ContainerBuilder->register('logger', 'Service\Logger');
	}

}